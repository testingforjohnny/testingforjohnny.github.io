<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>John's Academy Courses</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 0;
        }
        .course {
            margin-bottom: 15px;
            border-bottom: 1px solid #cccccc;
            padding-bottom: 10px;
        }
        h1 {
            color: #2c3e50;
        }
        p {
            color: #34495e;
        }
    </style>
</head>
<body>
    <h1>John's Academy Courses</h1>
    <div id="courses-container">
        <!-- Courses will be loaded here -->
    </div>

    <script>
    document.addEventListener("DOMContentLoaded", function() {
        fetch('https://your-project.vercel.app/api/courses')
            .then(response => response.json())
            .then(courses => {
                const container = document.getElementById('courses-container');
                courses.forEach(course => {
                    const courseDiv = document.createElement('div');
                    courseDiv.className = 'course';
                    courseDiv.innerHTML = `<h3>${course.title.rendered}</h3><p>${course.content.rendered}</p>`;
                    container.appendChild(courseDiv);
                });
            })
            .catch(error => console.error('Error fetching courses:', error));
    });
    </script>
</body>
</html>
