package ch.propulsion.bankapp.repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import ch.propulsion.bankapp.domain.Account;

public class AccountRepository implements AccountRepositoryInterface{
	private final Map<Long, Account> accounts = new HashMap<>();

	@Override
	public void addAccount(Account account) {
		accounts.put(account.getAccountNumber(), account);
//		return account.getAccountNumber();
	}

	@Override
	public void removeAccountFromRepo(long id) {
		accounts.remove(id);
	}

	@Override
	public List<Account> findAll() {
		return new ArrayList<>(accounts.values());
	}

	@Override
	public Account getAccountById(long id) {
		return accounts.get(id);
	}
}