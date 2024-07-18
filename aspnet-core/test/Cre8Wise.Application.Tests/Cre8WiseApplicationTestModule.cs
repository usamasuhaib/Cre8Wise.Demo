using Volo.Abp.Modularity;

namespace Cre8Wise;

[DependsOn(
    typeof(Cre8WiseApplicationModule),
    typeof(Cre8WiseDomainTestModule)
)]
public class Cre8WiseApplicationTestModule : AbpModule
{

}
