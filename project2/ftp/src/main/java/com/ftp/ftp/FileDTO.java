package com.ftp.ftp;

import java.util.Date; // подтягивается автоматически после создания private Date
// Создаем класс с такими же элементами как и в части фронтенд проекта

public class FileDTO {
    private String name;
    private String path;
    private Date creationDate;
    private Number id;
    private Number size;
    private String extension;
    private boolean isFolder;
   


    public String getName(){
        return name;
}
    public void setName(String name) {
        this.name = name;
    }

    public String getPath(){
        return path;
}
    public void setPath(String path) {
        this.path = path;
    }

    public Date getCreationDate(){
        return creationDate;
}
    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public Number getId(){
        return id;
}
    public void setId(Number id) {
        this.id = id;
    }

    public Number getSize(){
        return size;
}
    public void setSize(Number size) {
        this.size = size;
    }


    public String getExtension(){
        return extension;
}
    public void setExtension(String extension) {
        this.extension = extension;
    }
   
  
    public boolean isFolder(){
        return isFolder;
    }
    public void setFolder(boolean folder){
        isFolder = folder;
    }
}
