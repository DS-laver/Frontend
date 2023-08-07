package com.laver;

import com.google.firebase.messaging.FirebaseMessagingService;

public class MyFirebaseMessagingService extends FirebaseMessagingService {
  @Override
  public void onNewToken(String token) {
    System.out.println("Token: " + token);
  }

}