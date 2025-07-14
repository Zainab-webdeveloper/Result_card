
 function total_subject_marks(english, maths, science, socialStudies, computer, urdu) {
        return english + maths + science + socialStudies + computer + urdu;
    }

    function calculate_percentage(totalMarks, numberOfSubjects) {
        return (totalMarks / (numberOfSubjects * 100)) * 100;
    }

   
    function determineGrade(percentage) {
        if (percentage >= 85 && percentage <= 100) {
            return "A+";
        } else if (percentage >= 75 && percentage < 85) {
            return "A";
        } else if (percentage >= 65 && percentage < 75) {
            return "B+";
        } else if (percentage >= 60 && percentage < 65) {
            return "B";
        } else if (percentage >= 55 && percentage < 60) {
            return "C";
        } else if (percentage >= 50 && percentage < 55) {
            return "D";
        } else {
            return "F"; 
        }
    }

    

    function calculateMarksheet() {
        const errorDiv = document.getElementById('errorMessage');
        errorDiv.textContent = ''; 
        
       
        var nameInput = document.getElementById('studentName').value.trim();
        var rollNoInput = document.getElementById('rollNo').value.trim();
        
       
        var english = Number(document.getElementById('english').value);
        var maths = Number(document.getElementById('maths').value);
        var science = Number(document.getElementById('science').value);
        var socialStudies = Number(document.getElementById('socialStudies').value);
        var computer = Number(document.getElementById('computer').value);
        var urdu = Number(document.getElementById('urdu').value);

        
        if (nameInput === '' || rollNoInput === '') {
            errorDiv.textContent = "Name and Std No. cannot be empty.";
            return;
        }

        
        const marks = [english, maths, science, socialStudies, computer, urdu];
        for (let i = 0; i < marks.length; i++) {
            if (isNaN(marks[i]) || marks[i] < 0 || marks[i] > 100) {
                errorDiv.textContent = "Please enter valid marks (0-100) for all subjects.";
                return;
            }
        }
        
        
        const totalMarks = total_subject_marks(english, maths, science, socialStudies, computer, urdu);
        const numberOfSubjects = 6; 
        
        const percentage = calculate_percentage(totalMarks, numberOfSubjects);
        
        
        const grade = determineGrade(percentage);

        
        document.getElementById('totalMarks').textContent = totalMarks;
        
        document.getElementById('percentage').textContent = percentage.toFixed(2);
        
        
        document.getElementById('grade').textContent = grade;
        
        
        var resultsBox = document.getElementById('results');
        resultsBox.innerHTML = `
            <h3>Results for ${nameInput} (Roll No: ${rollNoInput})</h3>
            <p>Total Marks: ${totalMarks}</p>
            <p>Percentage: ${percentage.toFixed(2)}%</p>
            <p>Grade: <span class="success">${grade}</span></p>
        `;
    }
