const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static("public"));

// 1. Get list of all courses
app.get('/api/courses', (req, res) => {
    res.json([
        { id: 1, name: 'Computer Science 101', credits: 3 },
        { id: 2, name: 'Mathematics 201', credits: 4 },
        { id: 3, name: 'Physics 301', credits: 4 },
    ]);
});

// 2. Get details of a specific course by ID
app.get('/api/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const courses = [
        { id: 1, name: 'Computer Science 101', credits: 3 },
        { id: 2, name: 'Mathematics 201', credits: 4 },
        { id: 3, name: 'Physics 301', credits: 4 },
    ];
    const course = courses.find(c => c.id === courseId);
    if (course) {
        res.json(course);
    } else {
        res.status(404).json({ error: 'Course not found' });
    }
});

// 3. Get list of all students
app.get('/api/students', (req, res) => {
    res.json([
        { id: 1, name: 'Alice Johnson', major: 'Computer Science' },
        { id: 2, name: 'Bob Smith', major: 'Mathematics' },
        { id: 3, name: 'Charlie Brown', major: 'Physics' },
    ]);
});

// 4. Get details of a specific student by ID
app.get('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const students = [
        { id: 1, name: 'Alice Johnson', major: 'Computer Science' },
        { id: 2, name: 'Bob Smith', major: 'Mathematics' },
        { id: 3, name: 'Charlie Brown', major: 'Physics' },
    ];
    const student = students.find(s => s.id === studentId);
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ error: 'Student not found' });
    }
});

// 5. Get list of faculty members
app.get('/api/faculty', (req, res) => {
    res.json([
        { id: 1, name: 'Dr. Smith', department: 'Computer Science' },
        { id: 2, name: 'Dr. Jones', department: 'Mathematics' },
        { id: 3, name: 'Dr. Brown', department: 'Physics' },
    ]);
});

// 6. Get details of a specific faculty member by ID
app.get('/api/faculty/:id', (req, res) => {
    const facultyId = parseInt(req.params.id);
    const faculty = [
        { id: 1, name: 'Dr. Smith', department: 'Computer Science' },
        { id: 2, name: 'Dr. Jones', department: 'Mathematics' },
        { id: 3, name: 'Dr. Brown', department: 'Physics' },
    ];
    const member = faculty.find(f => f.id === facultyId);
    if (member) {
        res.json(member);
    } else {
        res.status(404).json({ error: 'Faculty member not found' });
    }
});

// 7. Get a list of classes being taught in a given semester
app.get('/api/classes', (req, res) => {
    res.json([
        { id: 1, course: 'Computer Science 101', faculty: 'Dr. Smith', semester: 'Fall 2024' },
        { id: 2, course: 'Mathematics 201', faculty: 'Dr. Jones', semester: 'Fall 2024' },
        { id: 3, course: 'Physics 301', faculty: 'Dr. Brown', semester: 'Fall 2024' },
    ]);
});

// Start the server
app.listen(PORT, () => {
    console.log(`University API server running at http://localhost:${PORT}`);
});

module.exports = app;
