package com.ftp.ftp;

// import java.lang.System.Logger;
import java.util.Collection;

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
@RequestMapping("/file")
@CrossOrigin(value = "http://localhost:4200/")
public class FileCintroller {
    
    FileService fileService;
    public FileCintroller(FileService fileService){ //конструктор класса FileController и поле fileService.
        this.fileService = fileService;
    }
    // В этом конструкторе в качестве параметра передается объект типа FileService. Этот объект присваивается полю fileService, которое объявлено выше. Таким образом, каждый раз, когда создается экземпляр класса FileController, он инициализируется с указанным объектом FileService.


    public static org.slf4j.Logger logger = LoggerFactory.getLogger("FileCintroller");
    // Создаем объект логгера и  инициализируем его с FileController
    // Логгер используется для записи сообщений лога в различные места, такие как файл, консоль, база данных и т.д. Обычно логгер используется для отслеживания состояния приложения, отладки проблем и отслеживания ошибок.
    @GetMapping
    Collection<FileDTO> rootFiles(@RequestParam(required = false) String path){
        logger.info("getRootFiles");
        return null;
    }
    @PostMapping
    ResponseEntity<FileDTO> upload(@RequestParam MultipartFile multypartFile){
        logger.info("upload{}", multypartFile.getName());
        return ResponseEntity.ok().build();
        // В теле метода вызывается метод logger.info(), который записывает сообщение в лог с уровнем info. В качестве аргумента передается строка с именем файла, полученного из объекта MultipartFile.
        // В конце метода возвращается объект типа ResponseEntity, который представляет HTTP-ответ. Метод ok() создает новый объект ResponseEntity со статусом 200 OK
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