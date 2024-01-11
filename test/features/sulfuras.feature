Feature: Sulfuras quality

  Scenario Outline: quality and sell-by unchanged
    Given an <item> with quality <quality> to be sold by <sell-by> days
    When a day passes
    Then the quality and sell-by should be unchaged
    Examples:
      | item                       | sell-by | quality |
      | Sulfuras, Hand of Ragnaros | 1       | 10      |
      | Sulfuras, Hand of Ragnaros | 5       | 25      |
      | Sulfuras, Hand of Ragnaros | 5       | 80      |
