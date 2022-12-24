package com.ftp.ftp;

import java.util.List;

import jakarta.validation.constraints.NotNull;

public interface FileService {


    List<FileDTO> getFiles(@NotNull String path);
}
