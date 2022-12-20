package com.ftp.ftp;

import java.util.Date; // подтягивается автоматически после создания private Date
// Создаем класс с такими же элементами как и в части фронтенд проекта

public class FileDTO {
    private String name;
    private String path;
    private Date creationDate;
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
    // Метод getName возвращает значение поля name, а методы setName и setPath устанавливают значения полей name и path соответственно.
    public Date getCreationDate(){
        return creationDate;
}
    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }
    public boolean isFolder(){
        return isFolder;
    }
    public void setFolder(boolean folder){
        isFolder = folder;
    }
}
