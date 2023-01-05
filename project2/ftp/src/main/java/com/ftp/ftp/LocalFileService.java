package com.ftp.ftp;
import java.io.File;
import java.text.DecimalFormat;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;


@Service
public class LocalFileService implements FileService{
   
   
   
    @Override
    public List<FileDTO> getFiles(String path){
       
        List<FileDTO> list;
        
        File file = new File(path);
        boolean directory = file.isDirectory();
        if (directory){

            File[] files = file.listFiles();
            if(files == null) throw new IllegalStateException("asd"+path);
            list = new ArrayList<>(files.length);
            int idCounter = 1;
            for(File fileListElement: files){
                FileDTO fileDTO = new FileDTO();
                fileDTO.setName(fileListElement.getName());
                
                fileDTO.setPath(fileListElement.getAbsolutePath());
                
                fileDTO.setCreationDate(new Date(fileListElement.lastModified()));
               
                fileDTO.setId(idCounter);
                idCounter++;
               
                double fileSizeInMegabytes = fileListElement.length() / (1024.0 * 1024.0);
                String formattedFileSize = String.format("%.2f", fileSizeInMegabytes);
                fileDTO.setSize(formattedFileSize);


                String fileName = fileListElement.getName();
                int index = fileName.lastIndexOf(".");
                if (index > 0) {
                    fileDTO.setExtension(fileName.substring(index + 1));
                }
                
                fileDTO.setIsFolder(fileListElement.isDirectory());
                
                list.add(fileDTO);
            }

        }
        else list = Collections.emptyList();
        return list; 

        
    }
}
