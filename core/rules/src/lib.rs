use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct RefactorRule {
    pub id: String,
    pub description: String,
    pub languages: Vec<String>,
}

pub fn get_default_rules() -> Vec<RefactorRule> {
    vec![
        RefactorRule {
            id: "collapse-nested-if".to_string(),
            description: "Converts nested if statements into guard clauses.".to_string(),
            languages: vec!["js".to_string(), "ts".to_string(), "python".to_string(), "dart".to_string()],
        }
    ]
}
