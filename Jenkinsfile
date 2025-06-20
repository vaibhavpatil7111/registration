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
                sh 'node --version'
                sh 'npm --version'
                sh 'npm cache clean --force'
                sh 'rm -rf node_modules package-lock.json'
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
                sh 'docker build -t registration-app:${BUILD_NUMBER} .'
                sh 'docker tag registration-app:${BUILD_NUMBER} registration-app:latest'
            }
        }
        
        stage('Deploy') {
            steps {
                // Make the deploy script executable
                sh 'chmod +x deploy.sh'
                // Run the deployment script
                sh './deploy.sh'
            }
        }
    }
    //hello
    //make the changes
    
    post {
        success {
            echo 'Registration application deployed successfully!'
        }
        failure {
            echo 'Deployment failed. Check the logs for details.'
        }
    }
}