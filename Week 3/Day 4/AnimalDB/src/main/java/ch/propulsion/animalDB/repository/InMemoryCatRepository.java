package ch.propulsion.animalDB.repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import ch.propulsion.animalDB.domain.Cat;

public class InMemoryCatRepository implements CatRepository {
	Map<Integer, Cat> dbTable = new HashMap<>();
	
	@Override
	public List<Cat> findAll() {
		return new ArrayList<>(dbTable.values());
	}

	@Override
	public Cat findById(Integer id) {
		return dbTable.get(id);
	}

	@Override
	public Cat insert(Cat c) {
		dbTable.put(c.getId(), c);
		return dbTable.get(c.getId());
	}

	@Override
	public void delete(Integer id) {
		dbTable.remove(id);
		
	}
}
