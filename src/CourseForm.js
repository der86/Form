import React, { useState } from 'react';
import axios from 'axios';

const CourseForm = () => {
    const [courseTitle, setCourseTitle] = useState('');
    const [courseDuration, setCourseDuration] = useState('');
    const [courseCategory, setCourseCategory] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [courseRequirement, setCourseRequirement] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const courseData = {
            courseTitle,
            courseDuration,
            courseCategory,
            courseDescription,
            courseRequirement,
            price
        };

        try {
            const response = await axios.post('http://192.168.1.9:5000/add-course', courseData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>courses</h1>
            <div>
                <label>Course Title:</label>
                <input type="text" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} />
            </div>
            <div>
                <label>Course Duration:</label>
                <input type="text" value={courseDuration} onChange={(e) => setCourseDuration(e.target.value)} />
            </div>
            <div>
                <label>Course Category:</label>
                <select
                    value={courseCategory}
                    onChange={(e) => setCourseCategory(e.target.value)}
                >
                    <option value="">Select Category</option>
                    <option value="Programming">Programming</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                </select>
            </div>
            <div>
                <label>Course Description:</label>
                <textarea value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)}></textarea>
            </div>
            <div>
                <label>Course Requirement:</label>
                <textarea value={courseRequirement} onChange={(e) => setCourseRequirement(e.target.value)}></textarea>
            </div>
            <div>
                <label>Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <button type="submit">Add Course</button>
        </form>
    );
};

export default CourseForm;

