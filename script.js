function showSection(section) {

    const content = document.getElementById("content");

    switch (section) {

        case "profile":
            content.innerHTML = `
                <h2>Profile</h2>
                <p>Hello! I am Mohamed, a Electronics and Communication Engineering student passionate about technology and continuous learning.</p>
            `;
            break;

        case "details":
            content.innerHTML = `
                <h2>Personal Details</h2>
                <p>Name: MOHAMED MUDATHIR</p>
                <p>Nationality: Sudanese</p>
                <p>Age: 20</p>
            `;
            break;

        case "location":
            content.innerHTML = `
                <h2>Location</h2>
                <p>Currently living in Coimbatore , India.</p>
            `;
            break;

        case "education":
            content.innerHTML = `
                <h2>Education</h2>
                <p>Bachelor's Degree in Electronics and Communication Engineering.</p>
            `;
            break;

        case "experience":
            content.innerHTML = `
                <h2>Experience</h2>
                <p>Student projects in IOT and Embedded Systems.</p>
            `;
            break;

        case "skills":
            content.innerHTML = `
                <h2>Skills</h2>
                <ul>
                    <li>Python</li>
                    <li>Embedded Systems</li>
                    <li>Machine Learning</li>
                    <li>Problem Solving</li>
                    <li>IOT</li>
                     <li>Home Automation</li>
                </ul>
            `;
            break;

        case "hobbies":
            content.innerHTML = `
                <h2>Hobbies</h2>
                <p>Football, Movies, Gaming, Anime, Chess.</p>
            `;
            break;

        case "contact":
            content.innerHTML = `
                <h2>Contact</h2>
                <p>Email: 25ec266@kpriet.ac.in</p>
                <p>Phone: +91 9597772718</p>
            `;
            break;

        default:
            content.innerHTML = `
                <h2>Welcome</h2>
                <p>Select a menu item.</p>
            `;
    }
}