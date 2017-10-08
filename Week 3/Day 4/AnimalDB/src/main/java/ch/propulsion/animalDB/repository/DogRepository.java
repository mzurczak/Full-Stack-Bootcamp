package ch.propulsion.animalDB.repository;

import java.util.List;

import ch.propulsion.animalDB.domain.Dog;

public interface DogRepository {
	List<Dog> findAll();
	Dog findById(Integer id);
	Dog insert(Dog d);
	void delete(Integer id);
	

}
