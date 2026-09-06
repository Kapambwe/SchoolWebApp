# Test Schools Configuration

This document explains how to add more test schools to the Test Login page.

## File Location

`wwwroot/sample-data/test-schools.json`

## JSON Structure

The test schools data is stored in a JSON array. Each school object has the following structure:

```json
{
  "tenantId": "unique-school-identifier",
  "displayName": "School Display Name",
  "country": "Country Name",
  "countryCode": "ISO 3166-1 alpha-2 code",
  "institutionType": "Primary|Secondary|International|Trade School|College|University",
  "testUsers": [
    {
      "role": "admin|teacher|student|parent",
      "email": "user@example.com",
      "password": "Password123",
      "fullName": "User Full Name"
    }
  ]
}
```

## Adding a New Test School

1. Open `wwwroot/sample-data/test-schools.json`
2. Add a new school object to the array
3. Ensure the `tenantId` matches the folder name in `wwwroot/sample-data/`
4. Set the appropriate `countryCode` (must match one of the countries in TestLogin.razor)
5. Set the `institutionType` (must match one of the types in TestLogin.razor)
6. Add test users for each role you want to support

## Example: Adding a New School

```json
{
  "tenantId": "accra-technical-college",
  "displayName": "Accra Technical College",
  "country": "Ghana",
  "countryCode": "GH",
  "institutionType": "Trade School",
  "testUsers": [
    {
      "role": "admin",
      "email": "admin@accratech.edu.gh",
      "password": "Admin@123",
      "fullName": "Kwame Mensah"
    },
    {
      "role": "teacher",
      "email": "teacher@accratech.edu.gh",
      "password": "Teacher@123",
      "fullName": "Ama Asante"
    },
    {
      "role": "student",
      "email": "student@accratech.edu.gh",
      "password": "Student@123",
      "fullName": "Kofi Boateng"
    },
    {
      "role": "parent",
      "email": "parent@accratech.edu.gh",
      "password": "Parent@123",
      "fullName": "Abena Boateng"
    }
  ]
}
```

## Supported Countries

The following English-speaking African countries are currently supported:

- Zambia (ZM)
- Kenya (KE)
- Nigeria (NG)
- Ghana (GH)
- South Africa (ZA)
- Uganda (UG)
- Tanzania (TZ)
- Zimbabwe (ZW)
- Botswana (BW)
- Malawi (MW)

## Supported Institution Types

- Primary
- Secondary
- International
- Trade School
- College
- University

## Important Notes

1. **Tenant ID**: Must match the folder name in `wwwroot/sample-data/` for the school's data
2. **Country Code**: Must be one of the supported countries listed above
3. **Institution Type**: Must be one of the supported types listed above
4. **Test Users**: Each school should have test users for all roles (admin, teacher, student, parent)
5. **Email Format**: Use realistic email addresses that match the school's domain
6. **Password Format**: Follow the password policy (e.g., Admin@123, Teacher@123)

## Creating Sample Data for New Schools

When adding a new school, you should also create the corresponding sample data folder:

1. Create folder: `wwwroot/sample-data/{tenantId}/`
2. Add `tenant-info.json` with school details
3. Add subfolders for different data types (admin, student, teacher, etc.)
4. Populate with sample JSON data

Example folder structure:
```
wwwroot/sample-data/
├── accra-technical-college/
│   ├── tenant-info.json
│   ├── admin/
│   │   ├── staff.json
│   │   └── students.json
│   ├── student/
│   │   ├── assignments.json
│   │   └── timetables.json
│   └── teacher/
│       ├── lesson-plans.json
│       └── timetables.json
```

## Testing

After adding a new school:

1. Ensure the application is in Test mode (`ServiceConfiguration:Mode` = "Test")
2. Navigate to `/auth/test-login`
3. Select the country, institution type, and your new school
4. Verify all test users can log in successfully
5. Check that the school's sample data loads correctly

## Troubleshooting

**School not appearing in dropdown:**
- Verify the `countryCode` matches one of the supported countries
- Verify the `institutionType` matches one of the supported types
- Check browser console for JSON loading errors

**Login fails:**
- Verify the test user credentials in TestAuthenticationService.cs
- Check that the `tenantId` matches the sample data folder name
- Ensure the password follows the required format

**Sample data not loading:**
- Verify the `tenantId` matches the folder name exactly
- Check that all required JSON files exist in the sample data folder
- Look for JSON parsing errors in the browser console
