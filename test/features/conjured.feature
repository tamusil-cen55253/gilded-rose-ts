Feature: Conjured Item quality

  Scenario Outline: degrades twice as fast as normal items
    Given an <item> with quality <quality> to be sold by <sell-by> days
    When a day passes
    Then the quality should be decreased by 2
    And the sell-by should be decreased by 1
    Examples:
      | item               | sell-by | quality |
      | Conjured Mana Cake | 1       | 20      |
      | Conjured Mana Cake | 5       | 7       |

  Scenario Outline: decreases by 4 each day after sell-by date
    Given an <item> with quality <quality> overdue by <overdue> days
    When a day passes
    Then the quality should be decreased by 4
    And the sell-by should be decreased by 1
    Examples:
      | item               | overdue | quality |
      | Conjured Mana Cake | 0       | 10      |
      | Conjured Mana Cake | 1       | 4       |

  Scenario Outline: never decreases below 0
    Given an <item> with quality <quality> <before-after> <sell-by> days
    When a day passes
    Then the quality should be 0
    And the sell-by should be decreased by 1
    Examples:
      | item               | before-after  | sell-by | quality |
      | Conjured Mana Cake | to be sold by | 1       | 0       |
      | Conjured Mana Cake | to be sold by | 1       | 1       |
      | Conjured Mana Cake | to be sold by | 1       | 2       |
      | Conjured Mana Cake | overdue by    | 0       | 0       |
      | Conjured Mana Cake | overdue by    | 0       | 2       |
      | Conjured Mana Cake | overdue by    | 0       | 3       |
      | Conjured Mana Cake | overdue by    | 0       | 4       |
