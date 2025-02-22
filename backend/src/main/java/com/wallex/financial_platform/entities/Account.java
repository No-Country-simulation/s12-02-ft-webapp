package com.wallex.financial_platform.entities;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Currency;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.wallex.financial_platform.entities.enums.CurrencyType;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@Entity
@Builder
@NoArgsConstructor @AllArgsConstructor
@Table(name = "accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private Long accountId;

    @Column(nullable = false, unique = true)
    private String cbu;

    @Column(nullable = false, unique = true)
    private String alias;

    @Column(nullable = false)
    private BigDecimal availableBalance;

    @Column(nullable = false)
    private BigDecimal reservedBalance;

    @Enumerated(EnumType.STRING)
    @Column( nullable = false)
    private CurrencyType currency;

    @Column( nullable = false)
    private Boolean active;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false, length = 20)
    private LocalDateTime updatedAt;

    @NotNull(message = "Requerid")
    @JoinColumn(name = "user_id", nullable=false)
    @JsonBackReference
    @ManyToOne
    private User user;

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Reservation> reservations;

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Movement> movements;

    @OneToMany(mappedBy = "sourceAccount", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Transaction> sourceTransactions;

    @OneToMany(mappedBy = "destinationAccount", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Transaction> destinationTransactions;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt =  LocalDateTime.now();
        active = true;
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

}
