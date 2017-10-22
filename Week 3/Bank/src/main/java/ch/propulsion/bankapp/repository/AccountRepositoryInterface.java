package ch.propulsion.bankapp.repository;

import java.util.List;

import ch.propulsion.bankapp.domain.Account;

public interface AccountRepositoryInterface {
//	Account addAccountToRepo(long id);
	void addAccount(Account account);
	void removeAccountFromRepo(long id);
	List<Account> findAll();
	Account getAccountById(long id);
	
}