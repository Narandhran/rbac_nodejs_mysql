# rbac_nodejs_mysql
## Role Based Access Control Implementaion

- This system mainly have five tables **users, roles, resources , permissions, auths**
- **users** are generally the end user (employees for an organization, students for an institution)
- **roles** , we have ADMIN,USER,RM (reporting manager)
- **resources**, every project has a different resources, let say school has admission resource, exam resource as such. In other words resources are nothing but a module.
- **permissions**, include all the **CRUD** permissions. And its a master table of all possible permissions included with unique permission id.
- **auths**, is a junction table which maps all the other tables.
