using Volo.Abp.Modularity;

namespace Cre8Wise;

/* Inherit from this class for your domain layer tests. */
public abstract class Cre8WiseDomainTestBase<TStartupModule> : Cre8WiseTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
