package com.wallex.financial_platform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wallex.financial_platform.entities.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    
}
