pipeline {
    agent any
    
    // tools {
    //     nodejs 'Node22'
    // }

    tools {
           nodejs 'Node18'
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
                sh 'export CI=false'
                sh 'export GENERATE_SOURCEMAP=false'
                sh '''
                        echo "🔧 Cleaning node_modules and installing dependencies..."
                        rm -rf node_modules package-lock.json
                        npm cache clean --force

                        echo "⬇️ Installing required dependencies manually..."
                        npm install ajv@8.12.0 --save
                        npm install --legacy-peer-deps
                        '''

                sh 'npm run build'
                sh 'ls -la build/'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker --version'
                sh 'ls -la'
                sh 'docker build -t registration-app:${BUILD_NUMBER} .'
                sh 'docker tag registration-app:${BUILD_NUMBER} registration-app:latest'
                sh 'docker images | grep registration-app'
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'ls -la deploy.sh'
                sh 'chmod +x deploy.sh'
                sh 'cat deploy.sh'
                sh './deploy.sh'
                sh 'docker ps | grep registration-app'
                sh 'sleep 5 && curl -f http://localhost:8081 || echo "App not ready yet"'
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