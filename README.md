Web Application Development homework 2

Team: Jaak Ivask, Mario Käära, Peeter Niidas

-------------------------------------------------------------
Tasks:

1. Create a JSON file that contains at least 10 objects that descript different posts. Pay special attention to the literals (create time, author name, etc.) you’ll include in your objects. Hint: read point 5, otherwise, you may need to modify your JSON file when you reach it. (1 point)
2. Try to find an online free webpage for validating the correctness of the JSON file you have just created, and use it to validate the JSON file. (1 point)
3. Try to find an online free webpage that allows you to store your JSON file online (endpoint). Many web pages can host your JSON file and provides you with a Uniform Resource Identifier (URI), which you can use to retrieve such information relying on jQuery. (1 point)
4. Write a jQuery code that can retrieve/fetch the posts information from the endpoint (URI) you created at point 3, and use such information to dynamically create the webpage shown in Figure 1. (3 points)
5. Comment out the previous code. Then, integrate the JSON file into your project, and modify the jQuery code to retrieve/fetch the posts information from it. (1 point)
6. You know that you can store only “text” in JSON files, try to find a solution for any photo that your posts include. (1 point)
7. Extend the webpage by creating a dropdown menu that shows a user name and email (Figure 2 and Figure 3), which opens and then closes by clicking on it. (2 points)
-------------------------------------------------------------


Solutions and explanations:

1. JSON file was created using https://jsoneditoronline.org/ service

2. JSON was validated via jsonlint.com

![alt text](https://github.com/jaak69/WAD_HW02/blob/dc602318407a1a8ee8c29971a7063b4ffbadb2d3/resource/images/validation.png "Screenshot of the validation result")

3. JSON is hosted via service at extendclass.com at the address https://json.extendsclass.com/bin/18f70eea2434

4. jQuery with local JSON file is implemented in file script.js usege via index.html

5. jQuery with remote JSON file is implemented in file script_web.js usege via index_web.html

6. 