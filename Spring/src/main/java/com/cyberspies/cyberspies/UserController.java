package com.cyberspies.cyberspies;

import com.cyberspies.cyberspies.models.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.ClientInfoStatus;
import java.text.ParseException;
import java.util.List;

@RestController
@RequestMapping("/users")

public class UserController {

    private final UserRepository userRepo;

    public UserController(UserRepository userRepo){
        this.userRepo = userRepo;
    }

    @GetMapping
    public List<User> getUsers(){
        return userRepo.findAll();
    }

    @GetMapping("/{username}")
    public User getUserByName(@PathVariable String username){
        return userRepo.findById(username).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createUser(@RequestBody User user) throws URISyntaxException, ParseException {
        User savedUser = userRepo.save(user);
        return ResponseEntity.created(new URI("/users/" + savedUser.getUsername())).body(savedUser);
    }

    @PutMapping("/{username}")
    public ResponseEntity updateUser(@PathVariable String username, @RequestBody User user){
        User curUser = userRepo.findById(username).orElseThrow(RuntimeException::new);
        curUser.setUsername(user.getUsername());
        curUser.setPwd(user.getPwd());
        curUser = userRepo.save(curUser);

        return ResponseEntity.ok(curUser);
    }

    @DeleteMapping("/{username}")
    public ResponseEntity deleteClient(@PathVariable String username){
        userRepo.deleteById(username);
        return ResponseEntity.ok().build();
    }


}
