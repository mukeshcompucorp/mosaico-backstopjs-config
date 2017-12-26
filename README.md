# How to
- Create `configs/crm-config.json` file with the following content.

```
{
  "url": "your_local_url",
  "credentials": {
    "name": "local_username",
    "pass": "local_password"
  }
}
```

- Run a specific config file (all scenarios must be under scenarios folder)
`node test-runner.js --task=reference --configPath=./search-actions.json`

`node test-runner.js --task=test --configPath=./search-actions.json`

# Note
This script always needs to be run with shoreditch test to verify that, changes of extension does not affect shoreditch styling.

# Covered pages

## Vanilla CiviCRM tests
Use https://github.com/compucorp/backstopjs-config/ for Vanilla CiviCRM tests
**It is must to test with the above scenairos if any of the changes are done in shoreditch theme.**

## Mosaico specifics

### New Mailing
- [x] Step 1 Intial screen
- [x] Step 1 recipients popup
- [x] Step 2 Edit Mail screen
- [x] Step 2 Mail test send
- [x] Step 2 Mail test preview HTML
- [x] Step 2 Mail test preview Text
- [x] Step 3 Initial screen
- [x] Step 3 Advanced settings popup
- [ ] Step 3 Radio Buttons
- [ ] Template management
