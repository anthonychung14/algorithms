def coin_change(n):
  # coins = [1, 5, 10, 25, 50, 100]
  coins = [5, 10, 25, 50, 100]
  change = [1] * (n + 1)
  for coin in coins[1:]:
    i = coin
    while i <= n:
      change[i] += change[i - coin]
      i += 1
  return change[-1]

print(coin_change(10))