package repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Before;
import org.junit.Test;

import ch.propulsion.bankapp.domain.Customer;
import ch.propulsion.bankapp.repository.CustomerRepository;

public class CustomerRepositoryTest {

	CustomerRepository repository = new CustomerRepository();		
	
	@Before
	public void preparation() {
		repository.getCustomers().clear();
	}

	@Test
	public void addNewCustomer() {
		assertThat(repository.getCustomers()).isEmpty();
		Customer customer1 = createCustomer1();
		repository.addNewCustomer(customer1);
		assertThat(repository.getCustomers()).hasSize(1);
		assertThat(repository.getCustomers()).containsValue(customer1);
	}
	
	@Test
	public void findAll() {
		assertThat(repository.getCustomers()).isEmpty();
		Customer customer1 = createCustomer1();
		Customer customer2 = createCustomer2();
		repository.addNewCustomer(customer1);
		repository.addNewCustomer(customer2);
		assertThat(repository.getCustomers()).containsValues(customer1, customer2);
	}
	
	@Test
	public void findCustomerById() {
		Customer customer1 = createCustomer1();
		Customer customer2 = createCustomer2();
		repository.addNewCustomer(customer1);
		repository.addNewCustomer(customer2);
		assertThat(repository.findCustomerById(customer1.getCustomerId())).isEqualTo(customer1);
	}
	
	@Test
	public void removeCustomerById() {
		Customer customer1 = createCustomer1();
		Customer customer2 = createCustomer2();
		repository.addNewCustomer(customer1);
		repository.addNewCustomer(customer2);
		
		assertThat(repository.getCustomers()).hasSize(2);
		
		repository.removeCustomerById(customer1.getCustomerId());
		assertThat(repository.getCustomers()).hasSize(1);
		assertThat(repository.getCustomers()).containsValue(customer2);
	}
	
	@Test
	public void displayCustomerInfo() {
		
	}
	
	public Customer createCustomer1() {
		Customer customer = new Customer("Michał", "Zurczak");
//		repository.addNewCustomer(customer);
		return customer;
	}
	
	public Customer createCustomer2() {
		Customer customer = new Customer("Dominika", "Zurczak");
//		repository.addNewCustomer(customer);
		return customer;
	}
	
	public void save1Customer() {
		Customer customer1 = createCustomer1();
		repository.addNewCustomer(customer1);
	}
	
	public void save2Customer() {
		Customer customer1 = createCustomer1();
		Customer customer2 = createCustomer2();
		repository.addNewCustomer(customer1);
		repository.addNewCustomer(customer2);
	}
	
	
}
