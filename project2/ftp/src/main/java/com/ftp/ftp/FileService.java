package com.ftp.ftp;

import java.io.File;
import java.util.List;

import jakarta.validation.constraints.NotNull;
// содержит определение интерфейса FileService, который содержит один метод getFiles. Интерфейсы в Java - это специальный тип класса, который содержит только объявления методов, без реализации. Они используются для определения спецификации или контракта, который должен реализовывать класс.
// Метод getFiles принимает один аргумент - строку path - и возвращает список элементов FileDTO. Он также помечен аннотацией @NotNull, которая указывает на то, что значение аргумента path не может быть null. Это означает, что все классы, реализующие этот интерфейс, должны обеспечивать, что значение аргумента path не равно null, иначе будет выброшено исключение NullPointerException.
public interface FileService {


    File[] getFiles(@NotNull String path);
}
