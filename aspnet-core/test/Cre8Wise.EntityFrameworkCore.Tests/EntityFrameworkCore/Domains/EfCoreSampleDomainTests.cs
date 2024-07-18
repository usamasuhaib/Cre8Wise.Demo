using Cre8Wise.Samples;
using Xunit;

namespace Cre8Wise.EntityFrameworkCore.Domains;

[Collection(Cre8WiseTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<Cre8WiseEntityFrameworkCoreTestModule>
{

}
