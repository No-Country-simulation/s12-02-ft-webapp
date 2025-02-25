package com.wallex.financial_platform.dtos.requests;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

public record EmailRequestDTO (@Email(message = "El email debe ser válido") String email){}
