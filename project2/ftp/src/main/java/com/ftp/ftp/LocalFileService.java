package com.ftp.ftp;
import java.io.File;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;
import java.util.List;

@Service
public class LocalFileService implements FileService{
    @Override
    public List<FileDTO> getFiles(String path){
        File file = new File(path);
        boolean directory = file.isDirectory();
        if (directory){

            File[] files = file.listFiles();
            if(files == null) throw new IllegalStateException("asd"+path);
        }
        return null;
    
    }
}
