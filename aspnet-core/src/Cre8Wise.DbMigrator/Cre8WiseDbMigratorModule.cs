using Cre8Wise.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace Cre8Wise.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(Cre8WiseEntityFrameworkCoreModule),
    typeof(Cre8WiseApplicationContractsModule)
    )]
public class Cre8WiseDbMigratorModule : AbpModule
{
}
