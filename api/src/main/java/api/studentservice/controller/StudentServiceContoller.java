package api.studentservice.controller;

import api.studentservice.model.StudentModel;
import api.studentservice.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentServiceContoller {

    @Autowired
    private StudentService studentService;

    //MARK: Get All Students
    @RequestMapping("/students")
    @CrossOrigin(origins = "http://localhost:8080")
    public List<StudentModel> getAllStudents(){
        return studentService.getAllStudents();
    }

    //MARK: Get Student by Id
    @RequestMapping("/students/{id}")
    @CrossOrigin(origins = "http://localhost:8080")
    public StudentModel getStudent(@PathVariable String id){
        return studentService.getStudent(id);
    }

    //MARK: Add new student
    @RequestMapping(method = RequestMethod.POST, value = "/students")
    @CrossOrigin(origins = "http://localhost:8080")
    public void addStudent(@RequestBody StudentModel studentModel){
        studentService.addStudent(studentModel);
    }

    //MARK: Update student information
    @RequestMapping(method = RequestMethod.PUT, value = "/students/{id}")
    @CrossOrigin(origins = "http://localhost:8080")
    public void updateStudent(@RequestBody StudentModel studentModel, @PathVariable String id){
        studentService.updateStudent(id, studentModel);
    }
}
