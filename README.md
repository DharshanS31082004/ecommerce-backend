# E-commerce Microservices Backend

## Overview
This project is built using a microservices architecture. Each service runs independently on a separate port.

##  Services Created
- Student Service (Port 3001)
- Course Service (Port 3002)
- College Service (Port 3003)
- User Service (Port 3004)

##  to Run

### Step 1: Install dependencies (inside each service)
cd services/student-service
npm install

cd ../course-service
npm install

cd ../college-service
npm install

cd ../user-service
npm install

---

### Step 2: Start services (open 4 terminals)

Terminal 1:
cd services/student-service
npm start

Terminal 2:
cd services/course-service
npm start

Terminal 3:
cd services/college-service
npm start

Terminal 4:
cd services/user-service
npm start

---

## APIs Available

### Student Service
GET /students  
POST /students  

### Course Service
GET /courses  
POST /courses  

### College Service
GET /colleges  
POST /colleges  

### User Service
GET /users  
POST /users  

---

## Learning Outcome
- Understood microservices architecture
- Learned to structure independent services
- Gained experience in building REST APIs