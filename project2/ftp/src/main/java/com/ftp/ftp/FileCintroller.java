package com.ftp.ftp;

import java.util.Collection;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.RestController;

// Новый класс джава. В Данной IDE создается через создание нового элемента в папке. packege и public class слздаются автоматически
//@RestController это аннотация, которая используется в языке Java в связке с библиотекой Spring Framework. Она указывает, что класс, к которому применена эта аннотация, является контроллером, который обрабатывает HTTP-запросы.

@RestController 
public class FileCintroller {
    

    @GetMapping
    Collection<FileDTO> getInFolder(@PathVariable("path") String path){
        return null;
    }
    @PostMapping
    ResponseEntity<FileDTO> upload(@RequestBody MultipartFile multypartFile){
        return ResponseEntity.ok().build();
    }
    @DeleteMapping("/{path}")
    FileDTO delete(@PathVariable("path") String path){
        return null;
    }
}
// Класс FileController содержит четыре метода: getRootFiles, getInFolder, upload и delete. Каждый из этих методов объявлен с помощью специализированных аннотаций, которые указывают на тип обрабатываемого запроса:

// @GetMapping указывает, что метод обрабатывает запросы типа GET. Два метода в классе объявлены с помощью этой аннотации: getRootFiles и getInFolder.

// @PostMapping указывает, что метод обрабатывает запросы типа POST. Метод upload объявлен с помощью этой аннотации.

// @DeleteMapping указывает, что метод обрабатывает запросы типа DELETE. Метод delete объявлен с помощью этой анн