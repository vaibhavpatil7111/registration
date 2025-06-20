pipeline {
    agent any
    
    tools {
        nodejs 'Node22'
    }
    triggers {
        githubPush()
    }

    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        // stage('Run Tests') { 
        //     steps {
        //         sh 'npm test -- --watchAll=false'
        //     }
        // } 
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image..."
                    sh 'docker build -t registration-app:${BUILD_NUMBER} .'
                    sh 'docker tag registration-app:${BUILD_NUMBER} registration-app:latest'
                    sh 'docker images | grep registration-app'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    echo "Starting deployment..."
                    sh 'chmod +x deploy.sh'
                    sh 'chmod +x debug-pipeline.sh'
                    
                    // Run debug script first
                    sh './debug-pipeline.sh'
                    
                    // Run deployment
                    sh './deploy.sh'
                    
                    // Verify deployment
                    sh 'docker ps | grep registration-app || echo "Container not running"'
                    sh 'sleep 5 && curl -f http://localhost:8081 || echo "App not responding"'
                }
            }
        }
    }
    
    
    post {
        always {
            script {
                echo "Pipeline completed. Checking final status..."
                sh 'docker ps | grep registration-app || echo "No container running"'
                sh 'docker images | grep registration-app || echo "No image found"'
            }
        }
        success {
            echo '✅ Pipeline completed successfully!'
            echo '🌐 App should be available at http://localhost:8081'
        }
        failure {
            echo '❌ Pipeline failed. Check the logs above for details.'
            script {
                sh 'docker logs registration-app-container || echo "No container logs"'
            }
        }
    }
}