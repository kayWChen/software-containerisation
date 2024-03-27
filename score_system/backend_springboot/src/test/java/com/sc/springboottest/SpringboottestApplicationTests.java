package com.sc.springboottest;

import com.sc.springboottest.repository.SubjectRepository;
import com.sc.springboottest.entity.Subject;
import com.sc.springboottest.repository.SubjectRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.bind.annotation.RequestBody;

@SpringBootTest
class SpringboottestApplicationTests {
    @Autowired
    private SubjectRepository repository;

    @Test
    void contextLoads() {
    }

    @Test
    void save(){
        Subject subject = new Subject();
        subject.setName("Math");
        subject.setScore(90);
        Subject subject1 = repository.save(subject);
        System.out.println(subject1);
    }

    @Test
    void findById(){
        Subject subject = repository.findById(1).get();
        System.out.println(subject);
    }

    @Test
    void update() {
        Subject subject = new Subject();
        subject.setId(132);
        subject.setName("English");
        Subject subject1 = repository.save(subject);
        System.out.println(subject);
    }

    @Test
    void delete() {
        repository.deleteById(132);
    }

}
