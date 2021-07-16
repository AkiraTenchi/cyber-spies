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

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id){
        return userRepo.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createUser(@RequestBody User user) throws URISyntaxException, ParseException {
        User savedUser = userRepo.save(user);
        return ResponseEntity.created(new URI("/users/" + savedUser.getId())).body(savedUser);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateUser(@PathVariable Long id, @RequestBody User user){
        User curUser = userRepo.findById(id).orElseThrow(RuntimeException::new);
        curUser.setUsername(user.getUsername());
        curUser.setPwd(user.getPwd());
        curUser = userRepo.save(curUser);

        return ResponseEntity.ok(curUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteClient(@PathVariable Long id){
        userRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
