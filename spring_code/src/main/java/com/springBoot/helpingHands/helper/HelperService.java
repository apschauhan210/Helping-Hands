package com.springBoot.helpingHands.helper;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.springBoot.helpingHands.client.Client;

@Service
public class HelperService {

    private final HelperRepository helperRepository;

    /**
     * @param helperRepository
     */
    public HelperService(HelperRepository helperRepository) {
        super();
        this.helperRepository = helperRepository;
    }

    public List<Helper> getHelpers() {
        return helperRepository.findAll();
    }

//	public List<Helper> getHelperByLocation(String location) {
//		List<Helper> helperByLocation = helperRepository.findHelperByLocation(location);
//		
//		if(helperByLocation.isEmpty()) {
//			throw new IllegalStateException("There is no helper providing service at " + location);
//		}
//		return helperByLocation;
//	}
    
    public Helper getHelperByEmail(String email) {
    	return helperRepository.findHelperByEmail(email).orElseThrow(() -> new IllegalStateException("The email you entered doesn't belong to an account. "
    			+ "Please check your email and try again.\n") );
    }

    public Helper addNewHelper(Helper helper) {
        Optional<Helper> helperByEmail = helperRepository.findHelperByEmail(helper.getEmail());
        Optional<Helper> helperByPhone = helperRepository.findHelperByPhone(helper.getPhone());

        if (helperByEmail.isPresent()) {
            throw new IllegalStateException("The email is already taken");
        }

        if (helperByPhone.isPresent()) {
            throw new IllegalStateException("The phone number is already taken");
        }

//		helper.sethCode(UUID.randomUUID().toString());

        helperRepository.save(helper);
        return helper;
    }
    
    @Transactional
    public Helper addOfferingClient(String helperEmail , Client client) {
    	Optional<Helper> helperByEmail = helperRepository.findHelperByEmail(helperEmail);
    	if(!helperByEmail.isPresent()) {
    		throw new IllegalStateException("Helper with email " + helperEmail + " does not exists");
    	}
    	if(client != null) {
	    	Helper currentHelper = helperByEmail.get();
	    	currentHelper.addOfferingClient(client.getEmail());
    	}
    	return helperByEmail.get();
    }

}
