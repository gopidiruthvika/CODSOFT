import random
choices = ["rock", "paper", "scissors"]
user_score = 0
comp_score = 0
while True:
    user = input("Choose rock, paper, or scissors: ").lower()
    if user not in choices:
        print("Invalid choice. Try again.")
        continue
    comp = random.choice(choices)
    print(f"You chose {user}, computer chose {comp}.")
    if user == comp:
        print("It's a tie!")
    elif (user == "rock" and comp == "scissors") or \
         (user == "scissors" and comp == "paper") or \
         (user == "paper" and comp == "rock"):
        print("You win this round!")
        user_score += 1
    else:
        print("Computer wins this round!")
        comp_score += 1

    print(f"Score → You: {user_score} | Computer: {comp_score}")
    again = input("Do you want to play again? (y/n): ").lower()
    if again != "y":
        print("\nFinal Score → You:", user_score, "| Computer:", comp_score)
        print("Thanks for playing!")
    break
print()
