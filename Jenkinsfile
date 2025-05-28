pipeline {
    agent {
        docker {
            image 'node:16'
            args '-u root'
        }
    }

    environment {
        SONARQUBE_SERVER = 'SonarQube'
        SONARQUBE_URL = 'http://sonarqube:9000'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Unit Tests') {
            steps {
                sh 'npm test'
            }
            post {
                always {
                    junit 'reports/junit.xml'
                }
            }
        }

        stage('Coverage') {
            steps {
                sh 'npm run coverage'
            }
            post {
                always {
                    publishHTML (target: [
                        reportDir: 'coverage/lcov-report',
                        reportFiles: 'index.html',
                        reportName: 'Coverage Report'
                    ])
                }
            }
        }

        stage('SonarQube analysis') {
            environment {
                scannerHome = tool 'SonarQubeScanner'
            }
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh """
                    ${scannerHome}/bin/sonar-scanner \
                    -Dsonar.projectKey=your_project_key \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=${SONARQUBE_URL} \
                    -Dsonar.login=${env.SONAR_TOKEN}
                    """
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline zakończony sukcesem.'
        }
        failure {
            echo 'Pipeline zakończony niepowodzeniem.'
        }
    }
}
