package com.wallex.financial_platform.dtos.requests;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;


public record DniRequestDTO(@NotBlank String dni) { }
