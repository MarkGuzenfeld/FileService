package com.ftp.ftp;

// import java.lang.System.Logger;
import java.util.Collection;
import java.util.Objects;

import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.RestController;

// Новый класс джава. В Данной IDE создается через создание нового элемента в папке. packege и public class слздаются автоматически
//@RestController это аннотация, которая используется в языке Java в связке с библиотекой Spring Framework. Она указывает, что класс, к которому применена эта аннотация, является контроллером, который обрабатывает HTTP-запросы.

@RestController 
@RequestMapping("/")
@CrossOrigin(value = "http://localhost:4200")
public class FileCintroller {
    
    LocalFileService fileService;


    public FileCintroller(LocalFileService fileService){ //конструктор класса FileController и поле fileService.
        this.fileService = fileService;
    }
 


    public static org.slf4j.Logger logger = LoggerFactory.getLogger("FileCintroller");

    @GetMapping
    Collection<FileDTO> getRootFiles(@RequestParam(value = "path",required = false) String path){
       
        logger.info(Objects.requireNonNullElse(path, "root"));
        
        String targetPath;
        if (path == null) {
        targetPath = "/";
        } else {
        targetPath = path;
        }
        return fileService.getFiles(targetPath);
            }
    
    @PostMapping
    
    ResponseEntity<?> upload(@RequestParam MultipartFile multypartFile){
        logger.info("upload{}", multypartFile.getName());
        return ResponseEntity.ok().build();
    
    }
    @DeleteMapping("/{path}")
    FileDTO delete(@PathVariable("path") String path){
        logger.info("delete {}", path);
        return null;
    }
}
// Класс FileController содержит четыре метода: getRootFiles, getInFolder, upload и delete. Каждый из этих методов объявлен с помощью специализированных аннотаций, которые указывают на тип обрабатываемого запроса:

// @GetMapping указывает, что метод обрабатывает запросы типа GET. Два метода в классе объявлены с помощью этой аннотации: getRootFiles и getInFolder.

// @PostMapping указывает, что метод обрабатывает запросы типа POST. Метод upload объявлен с помощью этой аннотации.

// @DeleteMapping указывает, что метод обрабатывает запросы типа DELETE. Метод delete объявлен с помощью этой анн