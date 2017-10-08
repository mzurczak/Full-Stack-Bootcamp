package ch.propulsion.animalDB.repository;

import java.util.List;

import ch.propulsion.animalDB.domain.Cat;

public interface CatRepository {
	List<Cat> findAll();
	Cat findById(Integer id);
	Cat insert(Cat c);
	void delete(Integer id);
	

}
