ine the original array
places_to_visit = ["Tokyo", "Paris", "New York", "Marrakech", "Sydney"]

# Print the original order
print("Original Order:", places_to_visit)

# Print in alphabetical order without modifying the original list
print("Alphabetical Order:", sorted(places_to_visit))

# Show that the original order is unchanged
print("Original Order (unchanged):", places_to_visit)

# Print in reverse alphabetical order without modifying the original list
print("Reverse Alphabetical Order:", sorted(places_to_visit, reverse=True))

# Show that the original order is unchanged
print("Original Order (unchanged):", places_to_visit)

# Reverse the order of the list and print
places_to_visit.reverse()
print("Reversed Order:", places_to_visit)

# Show that the order has changed
print("Order Changed:", places_to_visit)

# Sort the array in alphabetical order and print
places_to_visit.sort()
print("Sorted in Alphabetical Order:", places_to_visit)

# Show that the order has changed
print("Order Changed:", places_to_visit)

# Sort the array in reverse alphabetical order and print
places_to_visit.sort(reverse=True)
print("Sorted in Reverse Alphabetical Order:", places_to_visit)

# Show that the order has changed