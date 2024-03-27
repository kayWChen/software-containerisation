package com.sc.springboottest.controller;

import com.sc.springboottest.entity.Subject;
import com.sc.springboottest.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;


// Controller class for managing subject-related operations
@RestController
@RequestMapping("/subject")
public class SubjectHandler {
    @Autowired
    private SubjectRepository subjectRepository;

    // Method to retrieve all subjects with pagination
    @GetMapping("/findAll/{page}/{size}")
    public Page<Subject> findAll(@PathVariable("page") Integer page, @PathVariable("size") Integer size) {
        if (page < 1) {
            return null; // Return null if page number is invalid
        }
        // Create Pageable object for pagination
        Pageable pageable = PageRequest.of(page-1, size);
        return subjectRepository.findAll(pageable);  // Return paginated subject data
    }

    // Method to save a new subject
    @PostMapping("/save")
    public String save(@RequestBody Subject subject) {
        Subject result = subjectRepository.save(subject); // Save the subject
        if(result != null) {
            return "success"; // Return success message if subject saved successfully
        }else{
            return "error"; // Return fail message if subject operation failed
        }
    }

    // Method to find a subject by its ID
    @GetMapping("/findById/{id}")
    public Subject findById(@PathVariable("id") Integer id){
        return subjectRepository.findById(id).get();
    }

    // Method to update an existing subject
    @PutMapping("/update")
    public String update(@RequestBody Subject subject){
        Subject result = subjectRepository.save(subject); // Update the subject
        if (result != null) {

            return "success"; // Return success message if subject updated successfully
        }else {

            return "fail"; // Return error message if subject update operation failed
        }
    }

    // Method to delete a subject by its ID
    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        subjectRepository.deleteById(id);
    }  // Delete the subject with the given ID

}
