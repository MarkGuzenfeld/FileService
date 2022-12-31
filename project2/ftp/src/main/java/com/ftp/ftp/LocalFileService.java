package com.ftp.ftp;
import java.io.File;
import org.springframework.stereotype.Service;
import java.util.List;
// определение класса LocalFileService, который реализует интерфейс FileService. Класс помечен аннотацией @Service, что указывает на то, что этот класс является сервисом и может быть использован в приложении как отдельный компонент.

// Класс содержит один метод getFiles, который принимает один аргумент - строку path - и возвращает список элементов FileDTO. метод не содержит никакого реального функционала, а просто возвращает null
@Service
public class LocalFileService implements FileService{
    @Override
    public List<FileDTO> getFiles(String path){
        return null;
    }
}

