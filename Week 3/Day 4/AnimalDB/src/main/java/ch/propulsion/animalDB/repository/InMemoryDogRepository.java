package ch.propulsion.animalDB.repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import ch.propulsion.animalDB.domain.Dog;

public class InMemoryDogRepository implements DogRepository{
	Map<Integer, Dog> dbTable = new HashMap<>();
	int[][] arr = new int[2][2];	
	@Override
	public List<Dog> findAll() {
		return new ArrayList<> (dbTable.values());
	}

	@Override
	public Dog findById(Integer id) {
		return dbTable.get(id);
	}

	@Override
	public Dog insert(Dog d) {
		dbTable.put(d.getId(), d);
		return dbTable.get(d.getId());
	}

	@Override
	public void delete(Integer id) {
		dbTable.remove(id);	
	}
}
