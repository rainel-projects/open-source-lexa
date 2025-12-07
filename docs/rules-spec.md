# Refactoring Rule Specification

Lexa rules are defined in JSON format. This allows for language-agnostic rule definitions where possible, though complex logic is currently handled in the Rust core.

## Rule Schema

```json
{
  "id": "unique-rule-id",
  "description": "Human readable description of what the rule does.",
  "severity": "suggestion" | "warning" | "error",
  "languages": ["js", "ts", "python", "dart"],
  "examples": [
    {
      "before": "if (x) { if (y) { return true; } }",
      "after": "if (x && y) { return true; }"
    }
  ]
}
```

## Field Definitions

- **id**: Kebab-case identifier for the rule.
- **description**: Short explanation shown in the UI/CLI.
- **severity**: Default severity level.
- **languages**: List of file extensions or language IDs this rule applies to.
- **examples**: List of before/after code snippets for documentation.

## Implementation Details

Currently, the *logic* for the rule must be implemented in the Rust key `core/engine/src/rules/`. The JSON definition is used for metadata and UI display. Future versions will support declarative AST matching patterns in the JSON itself.
