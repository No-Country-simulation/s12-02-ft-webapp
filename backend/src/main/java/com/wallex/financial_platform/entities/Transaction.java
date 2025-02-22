package com.wallex.financial_platform.entities;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Date;

import com.wallex.financial_platform.entities.enums.TransactionStatus;
import jakarta.persistence.*;
import lombok.*;

import com.wallex.financial_platform.entities.enums.TransactionType;


@Data
@Entity
@Table(name = "transactions")
@Builder
@AllArgsConstructor @NoArgsConstructor
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "transaction_id")
    private Long transactionId;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Account sourceAccount;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Account destinationAccount;

    @Column(nullable = false)
    private BigDecimal amount;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TransactionType type;

    @Column(nullable = false)
    private String reason;

    @Column( nullable = false)
    private LocalDateTime transactionDateTime;

    @Column( nullable = false)
    private TransactionStatus status;

    @PrePersist
    protected void onCreate() {
        transactionDateTime = LocalDateTime.now();
    };
}
