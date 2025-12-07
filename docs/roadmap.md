# LEXA Project Roadmap

## Phase 1: MVP (Current)
- [ ] **Core Engine**
  - [ ] Tree-sitter integration for JS, TS, Python, Dart.
  - [ ] Basic AST traversal and mutation framework.
  - [ ] "Nested If" refactoring rule implementation.
- [ ] **Web UI**
  - [ ] Monaco Editor integration.
  - [ ] WASM loading mechanism.
  - [ ] Basic diff view.
- [ ] **CLI**
  - [ ] `lexa <file>` command support.

## Phase 2: Interactive Timeline
- [ ] **Engine**: Record intermediate AST states during refactoring.
- [ ] **UI**: Slider to step through refactoring actions.
- [ ] **UI**: Hover tooltips explaining each change.

## Phase 3: Advanced Rules & Customization
- [ ] **Engine**: Support for external rule definitions (JSON/YAML loading).
- [ ] **CLI**: `lexa --apply` for batch processing.
- [ ] **Docs**: comprehensive rule creation guide.

## Phase 4: Community & Ecosystem
- [ ] Plugin system for community rules.
- [ ] IDE Extensions (VS Code).
